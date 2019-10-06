using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Api.Controllers
{
    public class CadastroController : ApiController
    {
        // POST: api/Cadastro/
        [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
        public decimal Post(int parcelas, decimal valor)
        {
            return (valor * parcelas) * (decimal)1.05;
        }
    }
}
