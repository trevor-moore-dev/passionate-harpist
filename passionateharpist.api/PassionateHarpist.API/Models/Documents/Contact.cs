using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PassionateHarpist.API.Models.Documents
{
    public class Contact
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [Required]
        [BsonRequired]
        public string Name { get; set; }
        [Required]
        [BsonRequired]
        public string EmailOrPhone { get; set; }
        [Required]
        [BsonRequired]
        public string Subject { get; set; }
        [Required]
        [BsonRequired]
        public string Message { get; set; }
        [Required]
        [BsonRequired]
        public string CreatedOnDateTime { get; set; }
    }
}