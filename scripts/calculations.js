let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
let balanceColor = "green";
let categories = [
  "groceries",
  "restaurants",
  "transport",
  "home",
  "subscriptions",
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue = totalExpensesValue + expenseEntries[i][1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      total += expenseEntries[i][1];
    }
  }
  return total;
}

function calculateLargestCategory() {
  let categoriesTotals = [];
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const categoryTotal = calculateCategoryExpenses(category);
    categoriesTotals.push([category, categoryTotal]);
  }
  let largestCategory = categoriesTotals[0][0];
  let largestCategoryTotal = categoriesTotals[0][1];
  for (let i = 0; i < categoriesTotals.length; i++) {
    if (largestCategoryTotal < categoriesTotals[i][1]) {
      largestCategoryTotal = categoriesTotals[i][1];
      largestCategory = categoriesTotals[i][0];
    }
  }
  return largestCategory;
}

function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue += values[1];
}
