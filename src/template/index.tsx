import Strip from "../components/strip";
import Nav from "../components/nav";
import React from "react";

interface TemplateProps {
    children: React.ReactNode;
    stripActive: boolean;

}

const Template = ({children, stripActive}: TemplateProps) => {
    return (
        <>
            {stripActive && <Strip/>}
            <Nav/>
            <div className='min-h-[755px]'>
                {children}
            </div>
            <footer className='bg-black py-8 flex flex-col justify-center items-center bottom-0'>
                <a href='https://www.linkedin.com/in/cauesooouza/' className='text-white'>
                    feito com ♥ por caue souza
                </a>
            </footer>
        </>
    );
};

export default Template;