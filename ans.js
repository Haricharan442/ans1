function findRoute(ticketList) {
    // Create a dictionary to represent the graph
    const graph = {};

    // Build the graph using the provided tickets
    ticketList.forEach(ticket => {
        const [source, destination] = ticket.split('-');
        if (!graph[source]) {
            graph[source] = [];
        }
        graph[source].push(destination);
    });

    // Initialize a stack for DFS
    const stack = ['Kiev']; // Assuming your son started in Kiev

    // Initialize a list to track the route
    const route = [];

    while (stack.length > 0) {
        const currentCity = stack[stack.length - 1];

        // If the current city has available destinations
        if (graph[currentCity] && graph[currentCity].length > 0) {
            const nextCity = graph[currentCity].shift();
            stack.push(nextCity);
        } else {
            // If there are no more destinations from the current city, backtrack
            route.push(stack.pop());
        }
    }

    // Reverse the route to get the correct order
    route.reverse();

    return route;
}

// List of available tickets
const tickets = ["Paris-Skopje", "Zurich-Amsterdam", "Prague-Zurich", "Barcelona-Berlin", "Kiev-Prague", "Skopje-Paris", "Amsterdam-Barcelona", "Berlin-Kiev", "Berlin-Amsterdam"];

const route = findRoute(tickets);
console.log("Your son's travel route:");
console.log(route.join(" -> "));