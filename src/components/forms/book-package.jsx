import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function BookPackageForm() {
    const [promoCode, setPromoCode] = useState('');
    const [showPromoInput, setShowPromoInput] = useState(false);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    const handlePromoSubmit = (e) => {
        e.preventDefault();
        setShowPromoInput(false);
    };

    return (
        <form className="space-y-4 bg-muted/5 p-4 pb-6 flex flex-col z-10 rounded-b-[30px]">
            <div className='flex flex-row justify-end w-full '>
                {showPromoInput ? (
                    <div className=" flex mx-2">
                        <Input
                            type="text"
                            placeholder="Enter promo code"
                            className="border rounded-md px-2 py-1   rounded-tr-none rounded-br-none"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <Button onClick={handlePromoSubmit} className="rounded-l-none">
                            Submit
                        </Button>
                    </div>
                ) : (
                    <Button onClick={() => setShowPromoInput(!showPromoInput)} className="mx-4 px-1 bg-transparent text-foreground/60  hover:text-primary hover:bg-transparent  rounded-full flex items-center">
                        <div className="w-6 h-6 bg-transparent rounded-full  flex items-center justify-center">
                            <span className=" pb-1 text-lg relative ">+</span>
                        </div>
                        Add promo code
                    </Button>
                )}
            </div>
            <div className='flex flex-col sm:flex-row lg:flex-row justify-between w-full gap-4'>
                <div className="flex flex-col sm:flex-row lg:flex justify-center items-center w-full mx-6 space-y-4  gap-4 sm:space-y-0 space-x-1">
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full px-4"
                    />
                </div>
                <Button onClick={handleSearchSubmit} className="w-full py-2 sm:w-1/4  bg-primary text-buttonText px-3 rounded-full  transition-colors duration-300 font-medium text-lg shadow-md hover:bg-primary/90">
                    Search
                </Button>
            </div>
        </form>
    );
}
