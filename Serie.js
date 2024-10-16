"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(id, name, channel, seasons, description, link, imageUrl) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.imageUrl = imageUrl;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getChannel() {
        return this.channel;
    }
    setChannel(channel) {
        this.channel = channel;
    }
    getSeasons() {
        return this.seasons;
    }
    setSeasons(seasons) {
        this.seasons = seasons;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getLink() {
        return this.link;
    }
    setLink(link) {
        this.link = link;
    }
    getImageUrl() {
        return this.imageUrl;
    }
    setImageUrl(imageUrl) {
        this.imageUrl = imageUrl;
    }
}
exports.Serie = Serie;
