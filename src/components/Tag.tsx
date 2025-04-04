
interface TagProps {
    tag: string
}

export function Tag({ tag }: TagProps) {
    const tagClasses = ['rounded-md px-3 py-1 mt-1'];

    switch(tag) {
        case 'react':
            tagClasses.push('bg-blue-300 text-gray-700');
            break;
        case 'typescript':
            tagClasses.push('bg-blue-500');
            break;
        case 'node':
            tagClasses.push('bg-blue-500');
            break;
        case 'postgres':
            tagClasses.push('bg-blue-500');
            break;
        case 'oracle':
            tagClasses.push('bg-red-500');
            break;
        case 'python':
            tagClasses.push('bg-green-500');
            break;
        default:
            tagClasses.push('bg-blue-400');
    }

    return (
        <div className={tagClasses.join(' ')}>{tag}</div>
    );
};
