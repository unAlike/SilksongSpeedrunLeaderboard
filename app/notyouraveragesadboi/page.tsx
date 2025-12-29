import Image from "next/image";

export default function Home() {

 const names = ['Ryan, ','Alex, ','Dale'];

const data = [
        {
            name:'Ryan',
            age:26
        },
        {
            name:'Dale',
            age:21
        },
        {
            name:'Alex',
            age:35
        }
    ]

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <div className="justify-center align-middle">
        <h1 className="align-middle justify-center">Hello World!{names}</h1>
      </div>

        <div>
            <h1>{data.map(person=>(<p>Hello, {person.name}, you have {person.age} shaws!</p>))}</h1>
        </div>


    </div>
  );
}
