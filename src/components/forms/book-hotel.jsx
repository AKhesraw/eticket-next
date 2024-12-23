import { useState, useEffect } from 'react';
import { ComboBox } from '@/components/utils/combo-box';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BlurOverlay from '@/components/utils/blur-overlay';

export default function BookHotelForm() {
    const [selectedProvince, setSelectedProvince] = useState({ id: null, value: '' });
    const [selectedHotel, setSelectedHotel] = useState({ id: null, value: '' });
    const [promoCode, setPromoCode] = useState('');
    const [showPromoInput, setShowPromoInput] = useState(false);
    const [hotelOptions, setHotelOptions] = useState([]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    const handlePromoSubmit = (e) => {
        e.preventDefault();
        setShowPromoInput(false);
    };

    const provinceOptions = [
        { id: 1, value: 'Western Cape' },
        { id: 2, value: 'Eastern Cape' },
        { id: 3, value: 'Northern Cape' },
        { id: 4, value: 'Gauteng' },
        { id: 5, value: 'KwaZulu-Natal' },
    ];

    // Simulated function to fetch hotels based on selected province
    const fetchHotelsForProvince = (provinceId) => {
        // This would typically be an API call
        const hotelsByProvince = {
            1: [
                { id: 1, value: 'Cape Town Hotel' },
                { id: 2, value: 'Stellenbosch Inn' },
            ],
            2: [
                { id: 3, value: 'Port Elizabeth Resort' },
                { id: 4, value: 'East London Lodge' },
            ],
            // ... add more provinces and hotels as needed
        };
        return hotelsByProvince[provinceId] || [];
    };

    useEffect(() => {
        if (selectedProvince.id) {
            const hotels = fetchHotelsForProvince(selectedProvince.id);
            setHotelOptions(hotels);
            setSelectedHotel({ id: null, value: '' }); // Reset selected hotel when province changes
        }
    }, [selectedProvince]);

    return (
        <BlurOverlay className="rounded-b-[30px]">
            <form className="space-y-4 bg-muted/5 p-4 pb-6 flex flex-col z-10 rounded-b-[30px]">
                <div className='flex flex-row justify-end w-full'>
                    {showPromoInput ? (
                        <div className="flex mx-2">
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
                    <div className="flex flex-col sm:flex-row lg:flex justify-center w-full space-x-1 gap-4">
                        <ComboBox
                            frameworks={provinceOptions}
                            value={selectedProvince.value}
                            setValue={setSelectedProvince}
                            width={'full'}
                            dropdownWidth={550}
                            placeholder={'Province'}
                        />
                        <ComboBox
                            frameworks={hotelOptions}
                            value={selectedHotel.value}
                            setValue={setSelectedHotel}
                            width={'full'}
                            dropdownWidth={550}
                            placeholder={'Hotel'}
                            disabled={!selectedProvince.id}
                        />
                    </div>

                    <Button onClick={handleSearchSubmit} className="w-full py-2 sm:w-1/4 bg-primary text-buttonText px-3 rounded-full transition-colors duration-300 font-medium text-lg shadow-md hover:bg-primary/90">
                        Search
                    </Button>
                </div>
            </form>
        </BlurOverlay>
    );
}
