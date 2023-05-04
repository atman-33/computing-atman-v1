import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';
import { CreateItemDto } from './dto/create-item-dto';

@Controller('items')
export class ItemsController {

    /**
     *
     */
    constructor(private readonly itemsService: ItemsService) {
    }

    @Get()
    findAll() :Item[]{
        return this.itemsService.findAll();
    }

    @Get(':id')  // /items/id
    findById(@Param('id') id: string): Item {
        return this.itemsService.findById(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Item {
        return this.itemsService.create(createItemDto);
    }

    @Patch(':id')
    updateStatus(@Param('id') id: string): Item {
        return this.itemsService.updateStatus(id);
    }

    @Delete(':id')
    delete(@Param('id') id: string): void {
        this.itemsService.delete(id);
    }
}
