package co.edu.eci.arep.WebApplication.Repository;

import co.edu.eci.arep.WebApplication.Model.Property;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface PropertyRepository extends CrudRepository<Property, Long> {

    List<Property> findByAddress(String address);
    Optional<Property> findById(Long id);

}
