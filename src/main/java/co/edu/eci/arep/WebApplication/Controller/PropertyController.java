package co.edu.eci.arep.WebApplication.Controller;

import co.edu.eci.arep.WebApplication.Service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(path="/property")
public class PropertyController {

    private final PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    public void addNewProperty(@RequestParam("address") String address, @RequestParam("price") Double price, @RequestParam("size") Double size, @RequestParam("description") String description){
        propertyservice.createProperty(address, price, size, description);

    }
}
