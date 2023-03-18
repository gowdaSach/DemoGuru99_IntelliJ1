package TestRunners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features="src/test/java/Features",
        glue="stepDefinitions",
        tags="@EOCM-001",
        dryRun = false,
        plugin={"pretty","html:test-output"}
)



public class TestRunnner1 {
}
