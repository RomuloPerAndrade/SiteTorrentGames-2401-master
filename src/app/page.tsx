import { NavBar } from "./components/navbar";
import { Title } from "./components/title";
import { Card } from "./components/card";

export default function Home() {

  const filmes = [
    {
      id: 1,
      title: "Ghost of Tsushima",
      poster_path: "https://image.api.playstation.com/vulcan/ap/rnd/202106/2322/v53I7qHvpWSQsL2oLxrM46NV.png",
      vote_average: 6.6
    },
    {
      id: 2,
      title: "Call of Duty: World at War",
      poster_path: "https://m.media-amazon.com/images/I/71r9uo8OxUL._AC_UF1000,1000_QL80_.jpg",
      vote_average: 9.7
    }
  ]


  return ( 
    <main className="flex min-h-screen flex-col">
      
      <NavBar />
      <Title>Filmes em Alta</Title>
      <section className="flex gap-4 m-4 flex-wrap">
        
        { filmes.map( filme => <Card filme={filme} />) }
 
      </section>

      <section>
        <Title>Séries em Alta</Title>
      </section>



    </main>
  );
}
