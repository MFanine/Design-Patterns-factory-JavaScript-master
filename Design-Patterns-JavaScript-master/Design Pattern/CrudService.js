class CRUDService {
  constructor(Model) {
    this.Model = Model;
  }

  GetAll() {
    return async (req, res) => {
      try {
        const items = await this.Model.find();
        res.json(items);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  }

  GetById() {
    return async (req, res) => {
      try {
        const { id } = req.params;
        const item = await this.Model.findById(id);
        if (!item) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  }

  Create() {
    return async (req, res) => {
      try {
        const newItem = new this.Model(req.body);
        await newItem.save();
        res.status(201).json(newItem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  }

  UpdateById() {
    return async (req, res) => {
      try {
        const { id } = req.params;
        const updatedItem = await this.Model.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json(updatedItem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }}
  }

  DeleteById() {
    return async (req, res) => {
      try {
        const { id } = req.params;
        const deletedItem = await this.Model.findByIdAndDelete(id);
        if (!deletedItem) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json({message : "Deleted Succefully !!! "});
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  }
  
}
  
module.exports = CRUDService;
  