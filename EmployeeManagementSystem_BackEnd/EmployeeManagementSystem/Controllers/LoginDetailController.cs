using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployeeManagementSystem.models;

namespace EmployeeManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginDetailController : ControllerBase
    {
        private readonly EmployeeFullContext _context;

        public LoginDetailController(EmployeeFullContext context)
        {
            _context = context;
        }

        // GET: api/LoginDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoginDetail>>> GetLoginDetails()
        {
            return await _context.LoginDetails.ToListAsync();
        }

        //GET: api/LoginDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LoginDetail>> GetLoginDetail(int id)
        {
            var logindetail = await _context.LoginDetails.FindAsync(id);

            if (logindetail == null)
            {
                return NotFound();
            }

            return logindetail;
        }

        // PUT: api/LoginDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLoginDetail(int id, LoginDetail logindetail)
        {
            if (id != logindetail.EmployeeId)
            {
                return BadRequest();
            }

            _context.Entry(logindetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoginDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/LoginDetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LoginDetail>> PostLoginDetail(LoginDetail logindetail)
        {
            _context.LoginDetails.Add(logindetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLoginDetail", new { id = logindetail.EmployeeId }, logindetail);
        }

        // DELETE: api/LoginDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLoginDetail(int id)
        {
            var logindetail = await _context.LoginDetails.FindAsync(id);
            if (logindetail == null)
            {
                return NotFound();
            }

            _context.LoginDetails.Remove(logindetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LoginDetailExists(int id)
        {
            return _context.LoginDetails.Any(e => e.EmployeeId == id);
        }
    }
}