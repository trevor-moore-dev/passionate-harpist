using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PassionateHarpist.API.Models.Documents;
using PassionateHarpist.API.Models.DTO;
using PassionateHarpist.API.Services.Business;
using PassionateHarpist.API.Services.Business.Interfaces;
using PassionateHarpist.API.Services.Data;
using PassionateHarpist.API.Services.Data.Interfaces;

namespace PassionateHarpist.API
{
    public class Startup
    {
        public Startup(IWebHostEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(
                    name: "PassionateHarpist.API.CorsPolicy",
                    builder =>
                    {
                        builder
                            .AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
            });
            services.AddMemoryCache();
            services.AddControllers();
            services.AddSingleton<IContactService, ContactService>();
            services.AddSingleton<IDAO<Contact, Response<Contact>>>(service => new ContactDAO(
                Configuration["ConnectionStrings:MongoDBAtlasClusterConnection"],
                Configuration["ConnectionStrings:MongoDBAtlasDatabase"],
                Configuration["ConnectionStrings:MongoDBAtlasCollection"]));
            services.AddSingleton<IEmailService>(service => new EmailService(
                Configuration["EmailClient:ApiKey"],
                Configuration["EmailClient:BaseUrl"],
                Configuration["EmailClient:Domain"]));
            services.AddSingleton<IAuthenticationService>(service => new AuthenticationService(
                Configuration["ReCaptcha:SecretKey"]));
            services.AddSingleton<IMediaService, MediaService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
