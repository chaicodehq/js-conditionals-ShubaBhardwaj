/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if (billAmount <= 0 ) {
    return null
  }

  if (!Number.isInteger(serviceRating) || serviceRating < 1 || serviceRating > 5 ) {
    return null
  }

  // Your code here
    if (serviceRating == 1) {
      let tip = billAmount * 0.05; 
      tip = Math.round(tip * 100) /100
      let total = billAmount + tip;
      total = Math.round(total * 100) /100
     return { tipPercentage: 5, tipAmount: tip, totalAmount: total }; 
  } else if (serviceRating == 2) {
     let tip = billAmount * 0.10; 
      let total = billAmount + tip;
     return { tipPercentage: 10, tipAmount: tip, totalAmount: total }; 
  } else if (serviceRating == 3) {
     let tip = billAmount * 0.15; 
      let total = billAmount + tip;
     return { tipPercentage: 15, tipAmount: tip, totalAmount: total }; 
  } else if (serviceRating == 4) {
     let tip = billAmount * 0.20; 
      let total = billAmount + tip;
     return { tipPercentage: 20, tipAmount: tip, totalAmount: total }; 
  } else if (serviceRating == 5) {
     let tip = billAmount * 0.25; 
      let total = billAmount + tip;
     return { tipPercentage: 25, tipAmount: tip, totalAmount: total }; 
  } 
}
