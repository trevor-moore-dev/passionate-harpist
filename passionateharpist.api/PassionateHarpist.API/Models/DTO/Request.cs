namespace PassionateHarpist.API.Models.DTO
{
    public class Request<T>
    {
        public T Data { get; set; }
        public string Token { get; set; }
    }
}