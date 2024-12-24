import { useState } from 'react';
import { ComboBox } from '@/components/utils/combo-box';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BlurOverlay from '@/components/utils/blur-overlay';

export default function BookHotelForm() {
    const [selectedCar, setSelectedCar] = useState({ id: null, value: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [promoCode, setPromoCode] = useState('');
    const [showPromoInput, setShowPromoInput] = useState(false);

    const handleSearchSubmit = (e) => {e.preventDefault()};

    const handlePromoSubmit = (e) => {
        e.preventDefault();
        setShowPromoInput(false);
    };

    const carOptions = [
        { id: 1, value: 'Economy' },
        { id: 2, value: 'Compact' },
        { id: 3, value: 'Midsize' },
        { id: 4, value: 'SUV' },
        { id: 5, value: 'Luxury' },
    ];

    return (
        <BlurOverlay className="rounded-b-[30px]">
            <form className="space-y-4 bg-muted/5 p-4 pb-6 flex flex-col z-10 rounded-b-[30px]">
                <div className='flex flex-row justify-end w-full '>
                    {showPromoInput ? (
                        <div className=" flex mx-2">
                            <Input
                                type="text"
                                placeholder="Enter promo code"
                                className="border rounded-md px-2 py-1 rounded-tr-none rounded-br-none"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                            />
                            <Button onClick={handlePromoSubmit} className="rounded-l-none">
                                Submit
                            </Button>
                        </div>
                    ) : (
                        <Button onClick={() => setShowPromoInput(!showPromoInput)} className="mx-4 px-1 bg-transparent text-foreground/60 hover:text-primary hover:bg-transparent rounded-full flex items-center">
                            <div className="w-6 h-6 bg-transparent rounded-full flex items-center justify-center">
                                <span className="pb-1 text-lg relative">+</span>
                            </div>
                            Add promo code
                        </Button>
                    )}
                </div>
                <div className='flex flex-col sm:flex-row lg:flex-row justify-between w-full gap-4'>
                    <div className="flex flex-col sm:flex-row lg:flex justify-center w-full space-x-1">
                        <ComboBox frameworks={carOptions}
                                  value={selectedCar.value}
                                  setValue={setSelectedCar}
                                  width={'full'}
                                  dropdownWidth={700}
                                  placeholder={'Car type'}
                        />
                    </div>
                    <Button onClick={handleSearchSubmit} className="w-full py-2 sm:w-1/4  bg-primary text-buttonText px-3 rounded-full  transition-colors duration-300 font-medium text-lg shadow-md hover:bg-primary/90">
                        Search
                    </Button>
                </div>
            </form>
        </BlurOverlay>
    );
}
