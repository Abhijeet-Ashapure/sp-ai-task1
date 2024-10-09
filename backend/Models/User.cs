// Models/User.cs
using System;
using MongoDB.Bson;

namespace MyProject.Backend.Models
{
    public class User
    {
        public ObjectId Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Role { get; set; }
    }
}
