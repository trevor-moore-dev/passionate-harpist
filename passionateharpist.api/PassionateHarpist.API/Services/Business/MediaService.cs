using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;
using PassionateHarpist.API.Models;
using PassionateHarpist.API.Models.DTO;
using Newtonsoft.Json;
using PassionateHarpist.API.Services.Business.Interfaces;
using System;

namespace PassionateHarpist.API.Services.Business
{
    public class MediaService : IMediaService
    {
        private readonly IMemoryCache _cache;
        private static readonly HttpClient _client = new();

        public MediaService(IMemoryCache cache)
        {
            this._cache = cache;
        }

        public async Task<Response<SocialMedia>> GetSocialMediaFeed()
        {
            if (_cache.TryGetValue(AppSettings.Configuration.SocialMediaCacheKey, out List<SocialMedia> cachedSocialMedia))
            {
                return new Response<SocialMedia>()
                {
                    Success = true,
                    Data = cachedSocialMedia
                };
            }

            var socialMedia = new List<SocialMedia>();
            var user = await _client.GetAsync($"{AppSettings.Configuration.GetSocialMediaUrl}{AppSettings.Configuration.UserSocialMediaId}/media?access_token={AppSettings.Configuration.SocialMediaAccessToken}");
            var userJson = await user.Content.ReadAsStringAsync();
            var userMedia = JsonConvert.DeserializeObject<UserMedia>(userJson);

            foreach(var media in userMedia.Data)
            {
                var post = await _client.GetAsync($"{AppSettings.Configuration.GetSocialMediaUrl}{media.Id}?fields=id,caption,media_type,media_url,permalink,timestamp&access_token={AppSettings.Configuration.SocialMediaAccessToken}");
                var postJson = await post.Content.ReadAsStringAsync();
                var postMedia = JsonConvert.DeserializeObject<SocialMedia>(postJson);
                socialMedia.Add(postMedia);
            }

            _cache.Set(AppSettings.Configuration.SocialMediaCacheKey, socialMedia, TimeSpan.FromHours(1));

            return new Response<SocialMedia>()
            {
                Success = true,
                Data = socialMedia
            };
        }

        public async Task<Response<SocialMedia>> RefreshSocialMediaToken()
        {
            var response = await _client.GetAsync($"{AppSettings.Configuration.GetSocialMediaUrl}refresh_access_token?grant_type=ig_refresh_token&access_token={AppSettings.Configuration.SocialMediaAccessToken}");

            response.EnsureSuccessStatusCode();

            return new Response<SocialMedia>()
            {
                Success = true
            };
        }
    }
}