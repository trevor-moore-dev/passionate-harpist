namespace PassionateHarpist.API.Models
{
	public class AppSettings
	{
		public static Configuration Configuration { get; set; }
		
	}

	public class Configuration
    {
		public string AppDomain { get; set; }
		public string AppAudience { get; set; }
		public string SocialMediaCacheKey { get; set; }
		public string UserSocialMediaId { get; set; }
		public string GetSocialMediaUrl { get; set; }
		public string SocialMediaAccessToken { get; set; }
	}
}