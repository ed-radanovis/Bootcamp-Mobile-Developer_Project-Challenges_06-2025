import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

const teams = [
  { id: 1, name: "Ferrari", base: "Maranello, Itália" },
  { id: 2, name: "McLaren", base: "Woking, UK" },
  { id: 3, name: "Mercedes", base: "Brackley, UK" },
  { id: 4, name: "Red Bull Racing", base: "Milton Keynes, UK" },
  { id: 5, name: "Aston Martin", base: "Silverstone, UK" },
  { id: 6, name: "Alpine", base: "Enstone, UK" },
  { id: 7, name: "Williams", base: "Grove, UK" },
  { id: 8, name: "RB", base: "Faenza, Itália" },
  { id: 9, name: "Kick Sauber", base: "Hinwil, Suíça" },
  { id: 10, name: "Haas", base: "Kannapolis, USA" },
];
const drivers = [
  { id: 1, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 2, name: "Lando Norris", team: "McLaren" },
  { id: 3, name: "George Russell", team: "Mercedes" },
  { id: 4, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 5, name: "Charles Leclerc", team: "Ferrari" },
  { id: 6, name: "Carlos Sainz", team: "Ferrari" },
  { id: 7, name: "Oscar Piastri", team: "McLaren" },
  { id: 8, name: "Sergio Pérez", team: "Red Bull Racing" },
  { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin" },
  { id: 11, name: "Pierre Gasly", team: "Alpine" },
  { id: 12, name: "Esteban Ocon", team: "Alpine" },
  { id: 13, name: "Alexander Albon", team: "Williams" },
  { id: 14, name: "Logan Sargeant", team: "Williams" },
  { id: 15, name: "Daniel Ricciardo", team: "RB" },
  { id: 16, name: "Yuki Tsunoda", team: "RB" },
  { id: 17, name: "Valtteri Bottas", team: "Kick Sauber" },
  { id: 18, name: "Zhou Guanyu", team: "Kick Sauber" },
  { id: 19, name: "Kevin Magnussen", team: "Haas" },
  { id: 20, name: "Nico Hülkenberg", team: "Haas" },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return { teams };
});

interface TeamsParams {
  id: string;
}

server.get<{ Params: TeamsParams }>("/teams/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const team = teams.find((d) => d.id === id);

  if (!team) {
    response.type("application/json").code(404);
    return { message: "Team Not Found" };
  } else {
    response.type("application/json").code(200);
    return { team };
  }
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return { drivers };
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver Not Found" };
    } else {
      response.type("application/json").code(200);
      return { driver };
    }
  }
);

const { PORT } = process.env;

server.listen({ port: Number(PORT) }, (err) => {
  console.log(`\n💻  server started on port : ${PORT}\n`);
  console.log(`➡️  http://localhost:${PORT}\n \n`);
  console.log("📋 Available endpoints:\n");
  console.log(` GET /teams - List all teams\n`);
  console.log(` GET /teams/:id - Search team by ID\n`);
  console.log(` GET /drivers - List all drivers\n`);
  console.log(` GET /drivers/:id - Search driver by ID\n`);
});
