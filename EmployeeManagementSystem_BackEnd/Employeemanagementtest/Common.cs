using EmployeeManagementSystem.models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;


namespace Employeemanagementtest
{
    class Common
    {

        public static EmployeeFullContext GetMoqDbContext(string testDatabaseName)
        {
            var options = new DbContextOptionsBuilder<EmployeeFullContext>()
                                .UseInMemoryDatabase(databaseName: testDatabaseName)
                                .ConfigureWarnings(x => x.Ignore(InMemoryEventId.TransactionIgnoredWarning))
                                .Options;

            return new EmployeeFullContext(options);
        }
    }
}
