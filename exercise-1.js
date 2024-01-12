//ให้เขียน Query หายอดเงินทั้งหมดที่จ่ายด้วยเงินสด และที่จ่ายด้วยบัตรเครดิตในแต่ละชนิด

db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$credit_card_type",
      total_cash_payment: {
        $sum: {
          $cond: [{ $eq: ["$credit_card_type", null] }, "$total_price", 0],
        },
      },
      total_credit_card_payment: {
        $sum: {
          $cond: [{ $ne: ["$credit_card_type", null] }, "$total_price", 0],
        },
      },
    },
  },
]);
