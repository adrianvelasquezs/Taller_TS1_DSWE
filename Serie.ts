export class Serie {
    constructor(
        public id: number,
        public name: string,
        public channel: string,
        public seasons: number,
        public description: string,
        public link: string,
        public imageUrl: string
    ) {}
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getChannel(): string {
        return this.channel;
    }
    setChannel(channel: string): void {
        this.channel = channel;
    }
    getSeasons(): number {
        return this.seasons;
    }
    setSeasons(seasons: number): void {
        this.seasons = seasons;
    }
    getDescription(): string {
        return this.description;
    }
    setDescription(description: string): void {
        this.description = description;
    }
    getLink(): string {
        return this.link;
    }
    setLink(link: string): void {
        this.link = link;
    }
    getImageUrl(): string {
        return this.imageUrl;
    }
    setImageUrl(imageUrl: string): void {
        this.imageUrl = imageUrl;
    }
}