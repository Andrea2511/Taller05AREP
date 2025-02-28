package co.edu.eci.arep.WebApplication.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Property {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long propertyId;
    private String address;
    private Double price;
    private Double size;
    private String description;

    protected Property() {}

    public Property(Long propertyId, String address, Double price, Double size, String description) {
        this.propertyId = propertyId;
        this.address = address;
        this.price = price;
        this.size = size;
        this.description = description;
    }

    public Long getPropertyId() {
        return propertyId;
    }

    public String getAddress() {
        return address;
    }

    public Double getPrice() {
        return price;
    }

    public Double getSize() {
        return size;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return "Property{" +
                "propertyId=" + propertyId +
                ", address='" + address + '\'' +
                ", price=" + price +
                ", size=" + size +
                ", description='" + description + '\'' +
                '}';
    }
}
