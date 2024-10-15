package org.grupo.tacs;

import org.grupo.tacs.extras.RateLimiter;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class RateLimiterTest {
    private RateLimiter rateLimiter;

    @Before
    public void setUp() {
        // Inicializo el rate limiter con una capacidad de 10 requests cada 10 segundos
        rateLimiter = new RateLimiter(10, 10, 1000);
    }


}

