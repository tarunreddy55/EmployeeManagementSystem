using EmployeeManagementSystem.models;
using System;
using Xunit;
using EmployeeManagementSystem.Controllers;

using FakeItEasy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using static Employeemanagementtest.Common;

namespace Employeemanagementtest
{
    public class EmployeeDetailControllerTests
    {

        private readonly EmployeeFullContext db;

        public EmployeeDetailControllerTests()
        {
            db = GetMoqDbContext("EmployeeDetailsTests");
        }


        [Fact]
        public async Task GetEmployees_ReturnsTheEmployeesAsync_FindNothing()
        {
            // arrange
            var controller = new EmployeeDetailController(db);

            // act
            _ = await controller.GetEmployeeDetails();

            //assert
            var resultFromDb = db.EmployeeDetails.Count();


            Assert.Equal(0, resultFromDb);

        }

        [Fact]
        public async Task FindEmployee_ShouldReturnNull()
        {
            // arrange
            int empId = 1;
            var controller = new EmployeeDetailController(db);

            // act
            var controllerOutput = await controller.GetEmployeeDetail(empId);

            // assert
            var result = controllerOutput.Result as NotFoundObjectResult;
            //var resultEmp = result.Value as IEnumerable<EmployeeDetail>;

            Assert.Null(result);
        }


        // POST req check
        [Fact]
        public async Task AddsNewEmployee()
        {
            // arrange
            var newEmp = GetSampleEmployee(1);
            var controller = new EmployeeDetailController(db);

            // act
            var controllerOutput = controller.PostEmployeeDetail(newEmp);

            // assert
            var totalEmp = db.EmployeeDetails.Count();
            var allEmp = await db.EmployeeDetails.ToListAsync();


            Assert.Equal(1, totalEmp);
            Assert.Equal("Tarun", allEmp[0].EmployeeName);

        }


        [Fact]
        public async Task EmployeeDetails_FindEmployee_ShouldReturnNotNull()
        {
            // arrange
            int empId = 1;
            var controller = new EmployeeDetailController(db);

            // act
            var controllerOutput = await controller.GetEmployeeDetail(empId);

            // assert
            var result = controllerOutput.Result ;
        
            Assert.NotNull(result);
        }



        [Fact]
        public void UpdateEmployee()
        {
            // arrange
            int empId = 1;
            EmployeeDetail employeeOld = db.EmployeeDetails.Find(empId);

            EmployeeDetail employeeNew = GetSampleEmployee(1);
            // updating employee detail
            employeeNew.Salary = "1000";

            var controller = new EmployeeDetailController(db);


            // act
            var controllerOutput = controller.PutEmployeeDetail(empId, employeeNew);

            // assert
            var emp = db.EmployeeDetails.Find(empId);


            Assert.Equal("1000", emp.Salary);

        }

        [Fact]
        public async Task DeleteEmployee()
        {
            // arrange
            int empId = 1;
            var controller = new EmployeeDetailController(db);

            // act
            _ = await controller.DeleteEmployeeDetail(empId);

            // assert 
            var findEmp = db.EmployeeDetails.Find(empId);
            Assert.Null(findEmp);
        }


        private EmployeeDetail GetSampleEmployee(int id)
        {
            return new EmployeeDetail
            {
                EmployeeId = 1,
                EmployeeName = "Tarun",
                EmailId = "newemployee@gmail.com",
                ContactNo = "9393291625",
                Domain = "AI",
                Experience = "3",
                Salary = "18"
            };
        }
    }
}
