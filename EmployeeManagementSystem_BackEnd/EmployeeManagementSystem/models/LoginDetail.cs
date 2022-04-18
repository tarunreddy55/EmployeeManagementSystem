using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.models
{
    public class LoginDetail
    {
       
             [Key]
            public int EmployeeId { get; set; }

            [Column(TypeName = "nvarchar(100)")]
            public string UserName { get; set; }

            [Column(TypeName = "nvarchar(16)")]
            public string password { get; set; }




        
    }
}
