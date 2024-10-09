// DTOs/UserDto.cs
namespace MyProject.Backend.DTOs
{
    public class UserDto
    {
        public string Id { get; set; } // This can be removed from the creation DTO
        public string Name { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
    }
}
