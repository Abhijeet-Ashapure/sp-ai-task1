// Data/MongoDbContext.cs
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using MyProject.Backend.Models;

namespace MyProject.Backend.Data
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetConnectionString("MongoDb"));
            _database = client.GetDatabase("MyDatabase");
        }

        public IMongoCollection<User> Users => _database.GetCollection<User>("Users");
    }
}
