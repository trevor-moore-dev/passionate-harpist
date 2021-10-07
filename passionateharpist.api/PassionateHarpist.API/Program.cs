using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using PassionateHarpist.API.Models;

namespace PassionateHarpist.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var appSettings = File.ReadAllText(@"appsettings.json");
            var json = JObject.Parse(@appSettings);
            AppSettings.Configuration = JsonConvert.DeserializeObject<Configuration>(json["AppSettings"].ToString());
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
