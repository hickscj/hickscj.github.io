
interface TagProps {
    tag: string
}

export function Tag({ tag }: TagProps) {
    const tagClasses = ['text-xs rounded-md px-3 py-1 mt-1'];

    // stone, amber, yellow, orange, red
    switch(tag) {
        case 'react':
            tagClasses.push('bg-amber-800');
            break;
        case 'typescript':
            tagClasses.push('bg-orange-900');
            break;
        case 'node':
            tagClasses.push('bg-stone-600');
            break;
        case 'postgres':
            tagClasses.push('bg-red-950');
            break;
        case 'oracle':
            tagClasses.push('bg-yellow-800');
            break;
        case 'python':
            tagClasses.push('bg-yellow-900');
            break;
        default:
            tagClasses.push('bg-gray-400');
    }

    return (
        <div className={tagClasses.join(' ')}>{tag}</div>
    );
};
