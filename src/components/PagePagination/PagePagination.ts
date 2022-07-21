import { PAGINATION_LIMIT } from '@/utilities/constants';

export default {
    name: 'page-pagination',
    components: {},
    props: {
        pagesCount: {
            type: Number,
            default: 1,
        },
        linkName: { type: String, required: true },
        currentPage: { type: Number, default: 1 },
        totalEventsCount: { type: Number, default: 0 },
    },
    created() {
        //@ts-ignore
        console.log(this.linkName);
        //@ts-ignore
        console.log(this.pagesCount);
    },
    computed: {
        hasPrevious(): boolean {
            //@ts-ignore
            return this.currentPage - 1 !== 0;
        },
        hasNext(): boolean {
            return (
                //@ts-ignore
                this.currentPage * PAGINATION_LIMIT < this.totalEventsCount
            );
        },
    },
};
