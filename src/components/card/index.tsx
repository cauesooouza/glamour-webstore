import {Star, StarHalf} from 'lucide-react';

export interface cardInterface {
    title: string,
    price: number,
    description?: string,
    category?: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

interface rateImg {
    repeatCount: number
}

export default function Card({title, price, image, rating}: cardInterface) {
    const RateImg = ({repeatCount}: rateImg) => {
        const images = [];

        for (let i = 0; i < Math.floor(repeatCount); i++) {
            images.push(
                <Star key={i} color='rgb(250 204 21)' fill='yellow'/>
            );
        }

        if (repeatCount - Math.floor(repeatCount) > 0.4) {
            images.push(
                <StarHalf key='half' color='rgb(250 204 21)' fill='yellow'/>
            );

        }

        return (<>{images}</>);
    };

    return (
        <div
            className='w-[240px] lg:w-[280px] xl:w-[300px] flex flex-col rounded-lg border-[1px] border-gray-200 bg-white p-2'>
            <img src={image} alt={title} className='rounded-t-lg max-h-[300px] w-[300px] object-contain'/>
            <div className='px-4 py-2 flex flex-col h-full justify-evenly'>
                <span className='font-semibold text-xl leading-tight'>{title}</span>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-1'>
                        <span className='text-base font-semibold text-yellow-400'>
                            {rating.rate}
                        </span>
                        <RateImg repeatCount={rating.rate}/>
                    </div>
                    <span className='text-xs text-gray-500'>
                        {rating.count} avaliações
                    </span>
                </div>
                <span className='font-semibold text-lg mb-2'>${price}</span>
                <span className='self-end py-2 px-4 bg-black rounded-full text-white cursor-pointer'>comprar</span>
            </div>
        </div>
    );
}
