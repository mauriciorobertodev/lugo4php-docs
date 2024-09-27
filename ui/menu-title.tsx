import icon from '@/public/favicon-32x32.png';
import Image from 'next/image';

export function MenuTitle() {
    return (
        <div className="flex justify-center items-center gap-3">
            <Image src={icon} alt="test" width={24} height={24} className="rounded-md" />
            <p className="font-bold">Lugo4PHP</p>
        </div>
    );
}
