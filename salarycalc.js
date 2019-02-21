var departmentId = ["d001", "d002", "d003", "d004", "d005"];
var departments =  ["Marketing", "Finance", "Human Resources", "Production", "Development"];
var employeeId = [[100, 102, 103, 104, 104, 500], [200, 201, 202, 203, 204], [305, 306, 307], [402, 403, 404], [501, 502, 503]];
var salaries = [[65000, 85000, 95000, 100000, 70000, 70000], [85000, 120000, 65000, 75000, 80000], [50000, 55000, 75000], [50000, 50000, 80000], [75000, 100000, 65000]];
var employeeName = [["George", "Bob", "Rob", "Fred", "Harry", "Mike"], ["Tim", "Mary", "Jin", "Liz", "Yoshi"], ["Jen", "Kay", "Ella"], ["Tom", "Syd", "Emily"], ["Cat", "Kate", "Mary"]];

console.log(` Department: ${departmentId[0]} Employee name: ${employeeName [0] [0]}`);

for (var i = 0; i < departmentId.length; i++) {
	console.log(`Department ${departmentId[i]} - ${departments[i]}:`);
	for (var j = 0; j < employeeId[i].length; j++) {
		console.log(`  ${j+1}. Employee ID: ${employeeId[i][j]}, Name: ${employeeName[i][j]}'s Salary: ${salaries[i][j]} `);
		}
}

function salaryReport(){
	 var salary = 0;
	for (var i = 0; i < employeeId.length; i++) {
		
		for (var j = 0; j < employeeId[i].length; j++) {
			salary += salaries[i][j];
		//+ salaries[i][1] + salaries[i][2] + salaries[i][3] + salaries[i][4];
		}
}
		return salary;
}
console.log(salaryReport());

// for (var i = 0; i < departments.length; i++) {
// 	var deptsalary =
// }