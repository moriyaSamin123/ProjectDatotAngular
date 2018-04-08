using ProjectDadotAngularAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace ProjectDadotAngularAPI.Controllers
{
    




    public class rashiController : ApiController {



        datotEntities dbContext = null;
        public rashiController()
        {
            dbContext = new datotEntities();
        }

        //[ResponseType(typeof(council))]
        //[Route("/api/rashi/getCouncils")]
        [ActionName("getCouncils")]
        [HttpGet()]
        public List<council> getCouncils()
        {
            List<council> councilsList = null;
            try
            {
                councilsList = dbContext.council.ToList();
            }
            catch
            {
                councilsList = null;
            }
            return councilsList;
        }
    }
}






