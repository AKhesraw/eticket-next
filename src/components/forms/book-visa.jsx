import { useState } from 'react';
import { ComboBox } from '@/components/utils/combo-box';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeftRight } from 'lucide-react';
import BlurOverlay from '@/components/utils/blur-overlay';

export default function BookVisaForm() {
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [promoCode, setPromoCode] = useState('');
    const [showPromoInput, setShowPromoInput] = useState(false);

    const handleSwapLocations = () => {
        setFrom(to);
        setTo(from);
    };

    const handlePromoSubmit = (e) => {
        e.preventDefault();
        setShowPromoInput(false);
    };

    const fromOptions = [
        { id: 1, label: 'Accra' },
        { id: 2, label: 'London' },
        { id: 3, label: 'New York' },
        { id: 4, label: 'Paris' },
        { id: 5, label: 'Tokyo' },
    ];
    const toOptions = [
        { id: 1, label: 'Accra' },
        { id: 2, label: 'London' },
        { id: 3, label: 'New York' },
        { id: 4, label: 'Paris' },
        { id: 5, label: 'Tokyo' },
    ];

    return (
        <BlurOverlay className="rounded-b-[30px]">
            <form className="space-y-4 bg-muted/5 p-4 pb-6 flex flex-col z-10 rounded-b-[30px] relative">
                <div className='flex flex-row justify-end w-full '>
                    {showPromoInput ? (
                        <div className=" flex mx-2">
                            <Input
                                type="text"
                                placeholder="Enter promo code"
                                className="border rounded-md px-2 py-1 focus-visible:ring-offset-0 focus-visible:ring-0 rounded-tr-none rounded-br-none"
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
                    <div className="flex flex-col sm:flex-row lg:flex justify-center w-full space-x-1">
                        <ComboBox frameworks={fromOptions}
                                  value={from}
                                  setValue={setFrom}
                                  width={'full'}
                                  placeholder={'destination'}
                        />
                        <button type="button" onClick={handleSwapLocations} className="text-primary my-2 hover:text-primary flex items-center justify-center transition-transform duration-500 transform hover:rotate-180 active:rotate-[-0deg]">
                            <ArrowLeftRight className="size-5" />
                        </button>
                        <ComboBox
                            frameworks={toOptions}
                            value={to}
                            setValue={setTo}
                            width={'full'}
                            placeholder={'Return destination'}
                        />
                    </div>

                    <Button className="w-full py-2 sm:w-1/4  bg-primary text-buttonText px-3 rounded-full  transition-colors duration-300 font-medium text-lg shadow-md hover:bg-primary/90">
                        Search
                    </Button>
                </div>
            </form>
         </BlurOverlay>
    );
}