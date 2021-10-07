using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using PassionateHarpist.API.Models.Documents;
using PassionateHarpist.API.Models.DTO;
using PassionateHarpist.API.Services.Business.Interfaces;
using RestSharp;
using RestSharp.Authenticators;

namespace PassionateHarpist.API.Services.Business
{
    public class EmailService : IEmailService
    {
		private readonly string _apiKey;
		private readonly string _baseUrl;
		private readonly string _domain;

		public EmailService(string apiKey, string baseUrl, string domain)
		{
			this._apiKey = apiKey;
			this._baseUrl = baseUrl;
			this._domain = domain;
		}

		public async Task<Response<Contact>> SendContactEmail(Contact message)
		{
			var client = new RestClient();
			var request = new RestRequest();
			var mailgunVariables = new StringBuilder();
			client.BaseUrl = new Uri(this._baseUrl);
			client.Authenticator = new HttpBasicAuthenticator("api", this._apiKey);
			request.AddParameter("domain", this._domain, ParameterType.UrlSegment);
			request.Resource = $"{this._domain}/messages";
			request.AddParameter("from", "Passionate Harpist <passionateharpist@gmail.com>");
			request.AddParameter("to", "Passionate Harpist <passionateharpist@gmail.com>");
			request.AddParameter("subject", $"HARP INQUIRY - {message.Subject}");
			request.AddParameter("template", "inquiry");
			mailgunVariables.Append($"{{\"Name\": \"{message.Name}\",\"EmailOrPhone\": \"{message.EmailOrPhone}\",\"Subject\": \"{message.Subject}\",\"Message\": \"{message.Message}\"}}");
			request.AddParameter("h:X-Mailgun-Variables", mailgunVariables.ToString());
			request.Method = Method.POST;
			var response = await client.ExecuteAsync(request);

			if (response.StatusCode == HttpStatusCode.Accepted || response.StatusCode == HttpStatusCode.OK)
			{
				return new Response<Contact>()
				{
					Success = true
				};
			}
            else
            {
				return new Response<Contact>()
				{
					Errors = new Dictionary<string, List<string>>()
					{
						["*"] = new List<string> { "Message failed to send. Please try again :)" },
					},
					Success = false
				};
            }
		}
	}
}