import connectToDatabase from "../../utils/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        name,
        email,
        number,
        telegram,
        community,
        status,
        amount,
        razorpayPaymentId,
      } = req.body;

      const { db } = await connectToDatabase();

      const collection = db.collection("paymentForms");

      const result = await collection.insertOne({
        name,
        email,
        number,
        telegram,
        community,
        status,
        amount,
        razorpayPaymentId,
        createdAt: new Date(),
      });

      if (result.insertedId) {
        // Successfully inserted payment data, update status to "payment done"
        await collection.updateOne(
          { _id: result.insertedId },
          { $set: { status: "payment done" } }
        );

        res.status(201).json({
          success: true,
          message: "Payment data inserted successfully",
        });
      } else {
        throw new Error("Failed to insert payment data");
      }
    } catch (error) {
      console.error("Error inserting payment data:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
