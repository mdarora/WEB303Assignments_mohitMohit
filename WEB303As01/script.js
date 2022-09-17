/*
	WEB 303 Assignment 1 - jQuery
	{Mohit Mohit}
*/

$("document").ready(() => {

	const annualSalary = $("#yearly-salary");
	const techPercentage = $("#percent");
	const techAmount = $("#amount");

	function calculateTechExpense(){
		let amount = annualSalary.val() * techPercentage.val() / 100;
		techAmount.text(`$${amount.toFixed(2)}`);
	}
	annualSalary.change(calculateTechExpense);
	techPercentage.change(calculateTechExpense);
});