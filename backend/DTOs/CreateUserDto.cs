
namespace MyProject.Backend.DTOs
{
    public class CreateUserDto // New DTO for user creation
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
    }
}