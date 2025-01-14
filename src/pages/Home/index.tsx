import {useEffect, useRef, useState} from "react";
import Card, {cardInterface} from "../../components/card";
import Template from "../../template";
import modeloImg from "../../assets/modelo.png";
import calvinklein from "../../assets/logos/calvin-klein.png";
import gucci from "../../assets/logos/gucci-logo.png";
import prada from "../../assets/logos/prada-logo.png";
import versace from "../../assets/logos/versace.png";
import zara from "../../assets/logos/zara-logo.png";
import LoadingComponent from "../../components/loading";
import useScrollTriggeredCountUp from "../../application/Hooks/useScrollTriggeredCountUp.tsx";

const Home = () => {
    const [products, setProducts] = useState(Array<cardInterface>);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products?limit=4');
        return await data.json();
    };

    useEffect(() => {
        async function fetchApi() {
            const data = await fetchProducts();
            setProducts(data);
            setLoading(false);
        }
        console.log('fetching data');
        fetchApi();
    }, []);

    const fiftyRef = useRef<HTMLDivElement>(null);
    const fiftyCount = useScrollTriggeredCountUp(fiftyRef,50);

    const thousandRef = useRef<HTMLDivElement>(null);
    const thousandCount = useScrollTriggeredCountUp(thousandRef,2000);

    const thirtyThousandRef = useRef<HTMLDivElement>(null);
    const thirtyThousandCount = useScrollTriggeredCountUp(thirtyThousandRef,30000);

    return (
        <Template stripActive={true}>
            <header className="w-full">
                <section className="flex flex-col">
                    <div className="container flex flex-col md:flex-row gap-6 justify-between pt-6 px-4">
                        <div className="flex flex-col gap-3 md:justify-center">
                            <h1 className="font-anton text-[2.75rem] leading-[3rem] md:text-5xl">Encontre produtos
                                especiais para você</h1>
                            <p className=" text-sm text-gray-600 md:">Navegue por nossa diversificada linha de produtos
                                meticulosamente elaborados, projetadas para realçar sua individualidade e atender ao seu
                                senso de estilo.</p>
                            {/* compre agora */}
                            <span
                                className="inline-block w-full cursor-pointer hover:no-underline sm:max-w-[250px] py-3 rounded-full bg-black text-white text-center">compre agora</span>
                            {/* about */}
                            <div className="flex justify-evenly md:justify-start flex-wrap gap-x-8 gap-y-4 mb-4">
                                {/* box */}
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg md:text-2xl" ref={fiftyRef}>+{fiftyCount}</span>
                                    <p className="text-gray-600 text-xs font-sans">Marcas imporatadas</p>
                                </div>
                                {/* box */}
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg md:text-2xl" ref={thousandRef}>+{thousandCount}</span>
                                    <p className="text-gray-600 text-xs font-sans">Produtos de alta qualidade </p>
                                </div>
                                {/* box */}
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg md:text-2xl" ref={thirtyThousandRef}>+{thirtyThousandCount}</span>
                                    <p className="text-gray-600 text-xs font-sans">Clientes felizes</p>
                                </div>
                            </div>
                        </div>
                        <img src={modeloImg} alt="modelos vestindo roupas estilosas e ousando oculos"
                             className="object-contain md:w-80 relative md:-right-4 self-end -z-10"/>
                    </div>
                    {/* strip */}
                    <div className="w-full relative  bg-black ">
                        <div className="container py-4 px-8 flex flex-wrap justify-evenly gap-x-6 gap-y-3">
                            <img className="object-contain max-w-36" src={calvinklein} alt="calvin klein logo"/>
                            <img className="object-contain max-w-36" src={gucci} alt="gucci logo"/>
                            <img className="object-contain max-w-36" src={prada} alt="prada logo"/>
                            <img className="object-contain max-w-36" src={versace} alt="versace logo"/>
                            <img className="object-contain max-w-36" src={zara} alt="zara logo"/>
                        </div>
                    </div>
                </section>
            </header>
            <main>
                <section className='container flex flex-col items-center py-10'>
                    <span className='font-anton uppercase text-3xl mb-8'>novos produtos</span>
                    <div className='container flex flex-wrap gap-6 justify-center'>
                        {loading ? <LoadingComponent/> : products.map((product, index) => (
                            <Card key={index} title={product.title} price={product.price} image={product.image}
                                  rating={product.rating}/>
                        ))}

                    </div>
                </section>
            </main>
        </Template>
    );
};

export default Home;