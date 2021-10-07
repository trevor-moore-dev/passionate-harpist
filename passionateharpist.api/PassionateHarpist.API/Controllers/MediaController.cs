using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using PassionateHarpist.API.Models;
using PassionateHarpist.API.Models.DTO;
using PassionateHarpist.API.Services.Business.Interfaces;

namespace PassionateHarpist.API.Controllers
{
    [Route("api/[controller]")]
    public class MediaController : Controller
    {
        private readonly IMediaService _mediaService;

        public MediaController(IMediaService mediaService)
        {
            this._mediaService = mediaService;
        }

        [EnableCors("PassionateHarpist.API.CorsPolicy")]
        [HttpGet("[action]")]
        public async Task<Response<SocialMedia>> GetSocialMediaFeed()
        {
            try
            {
                var result = await this._mediaService.GetSocialMediaFeed();
                return result;
            }
            catch (Exception exception)
            {
                return new Response<SocialMedia>()
                {
                    Errors = new Dictionary<string, List<string>>()
                    {
                        ["*"] = new List<string> { exception.Message },
                    },
                    Success = false
                };
            }
        }
    }
}