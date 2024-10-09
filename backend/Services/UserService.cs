using System.Collections.Generic;
using System.Threading.Tasks;
using MyProject.Backend.Data;
using MyProject.Backend.DTOs;
using MyProject.Backend.Models;
using MongoDB.Driver; 
using MongoDB.Bson; 

namespace MyProject.Backend.Services
{
    public class UserService
    {
        private readonly MongoDbContext _context;

        public UserService(MongoDbContext context)
        {
            _context = context;
        }

        public async Task<UserDto> CreateUser(CreateUserDto createUserDto)
        {
            var user = new User 
            { 
                Id = ObjectId.GenerateNewId(), // Automatically generate the ID
                Name = createUserDto.Name, 
                Email = createUserDto.Email, 
                Role = createUserDto.Role 
            };
            
            await _context.Users.InsertOneAsync(user);
            
            return new UserDto 
            {
                Id = user.Id.ToString(), // Convert ObjectId to string
                Name = user.Name,
                Email = user.Email,
                Role = user.Role
            };
        }

        public async Task<List<User>> GetUsers()
        {
            return await _context.Users.Find(_ => true).ToListAsync();
        }
    }
}
