using Microsoft.AspNetCore.Mvc;
using MyProject.Backend.DTOs;
using MyProject.Backend.Models; 
using MyProject.Backend.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyProject.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] CreateUserDto createUserDto)
        {
            if (createUserDto == null)
            {
                return BadRequest("User data is required.");
            }

            var createdUser = await _userService.CreateUser(createUserDto);
            return CreatedAtAction(nameof(GetUsers), new { id = createdUser.Id }, createdUser);
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            var users = await _userService.GetUsers();
            return Ok(users);
        }
    }
}
