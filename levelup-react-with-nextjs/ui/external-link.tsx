import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const ExternalLink = ({
    children,
    href,
                             }: {
    children: React.ReactNode;
    href: string;
}) => {
    return (
        <a
            href={href}
            className="inline-flex px-3 py-1 text-sm font-medium text-gray-100 no-underline bg-gray-700 rounded-lg gap-x-2 hover:bg-gray-500 hover:text-white"
        >
        <div>{children}</div>

        <ArrowRightIcon className="block w-4" />
        </a>
);
};