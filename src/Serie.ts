export class Serie {

    private id: number;
    private name: string;
    private channel: string;
    private seasons: number;
    private description: string;
    private link: string;
    private imageUrl: string;

    constructor( id: number, name: string, channel: string, seasons: number, description: string,
                 link: string, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.imageUrl = imageUrl;
    }
    getId(): number{
        return this.id;
    }
    setId(id: number): void {
        this.id = id;
    }
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